# EmailJS Setup Guide

## Overview
This guide will help you set up EmailJS to handle contact form submissions on your Bâtex website.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID**

## Step 3: Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```html
Subject: Nouveau message de contact - Bâtex

Bonjour,

Vous avez reçu un nouveau message de contact via le site web Bâtex :

Nom : {{from_name}}
Email : {{from_email}}
Téléphone : {{from_phone}}

Message :
{{message}}

---
Ce message a été envoyé depuis le formulaire de contact de batex-renovations.ch
```

4. Save the template and note down your **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

## Step 5: Update Configuration

1. Open `src/config/emailjs.ts`
2. Replace the placeholder values with your actual credentials:

```typescript
export const emailjsConfig = {
  serviceId: 'your_service_id_here',
  templateId: 'your_template_id_here', 
  publicKey: 'your_public_key_here',
};
```

## Step 6: Test the Form

1. Build and deploy your website
2. Test the contact form
3. Check that emails are received correctly

## Features

✅ **Real email sending** - No more mock submissions  
✅ **Loading state** - Shows "Envoi en cours..." while sending  
✅ **Error handling** - Displays error messages if something goes wrong  
✅ **Form validation** - Required fields are validated  
✅ **Success feedback** - Shows success message after sending  
✅ **Form reset** - Clears form after successful submission  

## Troubleshooting

- **Emails not sending**: Check your EmailJS credentials
- **Template variables not working**: Make sure variable names match exactly
- **Service not found**: Verify your Service ID is correct
- **Rate limiting**: Free tier has limits, consider upgrading if needed

## Security Notes

- The public key is safe to expose in frontend code
- EmailJS handles the email sending securely
- No sensitive data is stored on your server
