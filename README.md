# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/52998b17-15f0-435b-82fb-87619adf40fb

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/52998b17-15f0-435b-82fb-87619adf40fb) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/52998b17-15f0-435b-82fb-87619adf40fb) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)


## Supabase (new project setup)

If your previous Supabase project was paused, create a new one and wire this app to it:

1. Create a new Supabase project.
2. In this repo, copy env template and fill your new project values:
   ```sh
   cp .env.example .env
   ```
   - `VITE_SUPABASE_URL` → your new project URL (`https://<project-ref>.supabase.co`)
   - `VITE_SUPABASE_PUBLISHABLE_KEY` → your new project's anon/publishable key
3. Create required tables/policies by running SQL in Supabase SQL Editor:
   - `supabase/migrations/202602150001_init_forms.sql`
4. (Optional) If you use Supabase CLI locally, update `supabase/config.toml` `project_id` to your new project ref and link it.
5. Start the app:
   ```sh
   npm run dev
   ```

Forms that depend on Supabase:
- Reservation form (`reservation_requests`)
- Newsletter signup (`newsletter_subscriptions`)


### Quick verification

Run this command to verify the app wiring for Supabase + forms:

```sh
npm run check:supabase-forms
```

This static check confirms:
- Supabase client env wiring exists.
- Reservation form writes to `reservation_requests`.
- Newsletter form writes to `newsletter_subscriptions`.

