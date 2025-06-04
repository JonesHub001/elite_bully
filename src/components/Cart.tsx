
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { ShoppingCart, Plus, Minus, X, Download } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import jsPDF from 'jspdf';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Header
    doc.setFontSize(20);
    doc.text('Elite Bully Production', 20, 20);
    doc.setFontSize(16);
    doc.text('Invoice', 20, 30);
    
    // Date
    doc.setFontSize(10);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 40);
    
    // Contact info
    doc.text('Email: topelitebullies@gmail.com', 20, 50);
    doc.text('Facebook: Elite Bully Production', 20, 55);
    
    // Items header
    doc.setFontSize(12);
    doc.text('Item', 20, 70);
    doc.text('Qty', 100, 70);
    doc.text('Price', 130, 70);
    doc.text('Total', 160, 70);
    
    // Draw line
    doc.line(20, 72, 190, 72);
    
    // Items
    let yPosition = 80;
    items.forEach((item) => {
      doc.setFontSize(10);
      doc.text(item.name.substring(0, 40), 20, yPosition);
      doc.text(item.quantity.toString(), 100, yPosition);
      doc.text(`$${item.price.toFixed(2)}`, 130, yPosition);
      doc.text(`$${(item.price * item.quantity).toFixed(2)}`, 160, yPosition);
      yPosition += 10;
    });
    
    // Total
    doc.line(20, yPosition, 190, yPosition);
    yPosition += 10;
    doc.setFontSize(12);
    doc.text(`Total: $${totalPrice.toFixed(2)}`, 160, yPosition);
    
    // Payment instruction
    yPosition += 20;
    doc.setFontSize(10);
    doc.text('Please send this invoice to us via:', 20, yPosition);
    doc.text('Email: topelitebullies@gmail.com', 20, yPosition + 10);
    doc.text('Facebook: Elite Bully Production', 20, yPosition + 20);
    doc.text('We accept: CashApp, PayPal, Zelle, Revolut, Apple Pay', 20, yPosition + 30);
    
    // Save the PDF
    doc.save(`elite-bully-invoice-${Date.now()}.pdf`);
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="relative">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Cart
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-gold-600 text-black rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {totalItems}
            </span>
          )}
        </Button>
      </DrawerTrigger>
      
      <DrawerContent className="max-h-[80vh]">
        <DrawerHeader>
          <DrawerTitle className="flex items-center justify-between">
            Shopping Cart
            {items.length > 0 && (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={clearCart}
                className="text-red-500 hover:text-red-700"
              >
                Clear All
              </Button>
            )}
          </DrawerTitle>
        </DrawerHeader>
        
        <div className="p-4 max-h-96 overflow-y-auto">
          {items.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              Your cart is empty
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <Card key={item.id} className="p-4">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gold-600">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
        
        {items.length > 0 && (
          <div className="border-t p-4 space-y-4">
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total: ${totalPrice.toFixed(2)}</span>
              <span>{totalItems} items</span>
            </div>
            <Button 
              onClick={generatePDF}
              className="w-full bg-gold-600 hover:bg-gold-700 text-black"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Invoice PDF
            </Button>
            <p className="text-sm text-gray-500 text-center">
              Send this invoice to us via email or Facebook to complete your order
            </p>
          </div>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default Cart;
