
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
    
    // Header with company name
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('Elite Bully Production', 20, 25);
    
    // Invoice title and number
    doc.setFontSize(18);
    doc.text('INVOICE', 20, 40);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`Invoice #: EBP-${Date.now().toString().slice(-6)}`, 20, 48);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 55);
    
    // Company contact info section
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('From:', 20, 70);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Elite Bully Production', 20, 78);
    doc.text('Email: topelitebullies@gmail.com', 20, 85);
    doc.text('Facebook: Elite Bully Production', 20, 92);
    
    // Client info section
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Bill To:', 120, 70);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Client Name: _________________________', 120, 78);
    doc.text('Email: ______________________________', 120, 85);
    doc.text('Phone: ______________________________', 120, 92);
    
    // Items table header
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('ITEM DESCRIPTION', 20, 115);
    doc.text('QTY', 120, 115);
    doc.text('UNIT PRICE', 145, 115);
    doc.text('TOTAL', 170, 115);
    
    // Draw header line
    doc.setLineWidth(0.5);
    doc.line(20, 118, 190, 118);
    
    // Items
    let yPosition = 128;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    
    items.forEach((item) => {
      // Wrap long item names
      const itemName = item.name.length > 45 ? item.name.substring(0, 42) + '...' : item.name;
      doc.text(itemName, 20, yPosition);
      doc.text(item.quantity.toString(), 125, yPosition);
      doc.text(`$${item.price.toFixed(2)}`, 150, yPosition);
      doc.text(`$${(item.price * item.quantity).toFixed(2)}`, 175, yPosition);
      yPosition += 12;
    });
    
    // Subtotal and total section
    yPosition += 10;
    doc.setLineWidth(0.3);
    doc.line(140, yPosition, 190, yPosition);
    yPosition += 8;
    
    doc.setFont('helvetica', 'normal');
    doc.text('Subtotal:', 140, yPosition);
    doc.text(`$${totalPrice.toFixed(2)}`, 175, yPosition);
    yPosition += 8;
    
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('TOTAL DUE:', 140, yPosition);
    doc.text(`$${totalPrice.toFixed(2)}`, 175, yPosition);
    
    // Payment instructions section
    yPosition += 20;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('PAYMENT INSTRUCTIONS:', 20, yPosition);
    yPosition += 10;
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Please send this invoice along with payment to:', 20, yPosition);
    yPosition += 8;
    doc.text('• Email: topelitebullies@gmail.com', 25, yPosition);
    yPosition += 8;
    doc.text('• Facebook: Elite Bully Production', 25, yPosition);
    yPosition += 12;
    doc.text('We accept: CashApp, PayPal, Zelle, Revolut, Apple Pay', 20, yPosition);
    
    // Signature section
    yPosition += 25;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('SIGNATURES:', 20, yPosition);
    yPosition += 15;
    
    // Client signature
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Client Signature:', 20, yPosition);
    doc.line(55, yPosition, 120, yPosition);
    doc.text('Date:', 125, yPosition);
    doc.line(135, yPosition, 170, yPosition);
    
    yPosition += 20;
    
    // Company signature
    doc.text('Elite Bully Production:', 20, yPosition);
    doc.line(70, yPosition, 135, yPosition);
    doc.text('Date:', 140, yPosition);
    doc.line(150, yPosition, 185, yPosition);
    
    // Footer terms
    yPosition += 20;
    doc.setFontSize(8);
    doc.setFont('helvetica', 'italic');
    doc.text('Thank you for your business! This invoice is valid for 30 days.', 20, yPosition);
    doc.text('All sales are final. Please contact us with any questions.', 20, yPosition + 8);
    
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
              Download Professional Invoice PDF
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
