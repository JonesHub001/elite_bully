import { readFileSync } from 'node:fs';

const checks = [
  {
    name: 'Supabase client is configured',
    file: 'src/integrations/supabase/client.ts',
    mustInclude: ['VITE_SUPABASE_URL', 'VITE_SUPABASE_PUBLISHABLE_KEY', 'createClient<Database>'],
  },
  {
    name: 'Reservation form submits to Supabase',
    file: 'src/pages/ReservationForm.tsx',
    mustInclude: ["<form onSubmit={handleSubmit}", "supabase", ".from('reservation_requests')", '.insert({'],
  },
  {
    name: 'Newsletter form submits to Supabase',
    file: 'src/components/NewsletterSignup.tsx',
    mustInclude: ["<form onSubmit={handleSubmit}", "supabase", ".from('newsletter_subscriptions')", '.insert({ email })'],
  },
];

let hasFailure = false;

for (const check of checks) {
  const content = readFileSync(check.file, 'utf8');
  const missing = check.mustInclude.filter((needle) => !content.includes(needle));

  if (missing.length === 0) {
    console.log(`✅ ${check.name}`);
  } else {
    hasFailure = true;
    console.log(`❌ ${check.name}`);
    for (const needle of missing) {
      console.log(`   missing: ${needle}`);
    }
  }
}

if (hasFailure) {
  process.exit(1);
}
