# cPanel Deployment Guide

This guide will help you deploy your Next.js application to cPanel.

## Prerequisites

- Node.js installed on your local machine
- Access to your cPanel account
- FTP/SFTP access or cPanel File Manager

## Step 1: Build the Static Export

On your local machine, run the following commands:

```bash
# Install dependencies (if not already installed)
npm install

# Build the static export
npm run export
```

This will create a `out` directory containing all the static files ready for deployment.

## Step 2: Prepare Files for Upload

After building, you'll have:
- `out/` directory - Contains all static files
- `.htaccess` file - Apache configuration for routing (already created)

## Step 3: Upload to cPanel

### Option A: Using cPanel File Manager

1. Log in to your cPanel account
2. Navigate to **File Manager**
3. Go to `public_html` directory (or your domain's root directory)
4. **Important**: If you have an existing website, backup your current files first
5. Upload all contents from the `out` directory to `public_html`
6. Upload the `.htaccess` file to `public_html` as well

### Option B: Using FTP/SFTP

1. Connect to your server using an FTP client (FileZilla, WinSCP, etc.)
2. Navigate to `public_html` directory
3. Upload all files from the `out` directory
4. Upload the `.htaccess` file

## Step 4: Verify File Structure

Your `public_html` directory should look like this:

```
public_html/
├── .htaccess
├── index.html
├── _next/
│   ├── static/
│   └── ...
├── (other static files)
└── ...
```

## Step 5: Set Permissions

In cPanel File Manager:
1. Select the `.htaccess` file
2. Right-click and select "Change Permissions"
3. Set permissions to `644`

## Step 6: Test Your Website

1. Visit your domain in a web browser
2. Test all pages and navigation
3. Check browser console for any errors

## Troubleshooting

### 404 Errors on Routes

If you're getting 404 errors when navigating to routes:
- Ensure `.htaccess` file is uploaded to `public_html`
- Check that mod_rewrite is enabled on your server
- Verify file permissions on `.htaccess` (should be 644)

### Images Not Loading

- Check that all files from the `out` directory were uploaded
- Verify image paths in the browser console
- Ensure images are in the correct directories

### CSS/JS Not Loading

- Clear your browser cache
- Check that `_next/static` folder was uploaded correctly
- Verify file paths in browser developer tools

## Updating Your Site

To update your site:

1. Make changes to your code locally
2. Run `npm run export` again
3. Upload the new `out` directory contents to `public_html` (overwrite existing files)
4. Clear browser cache and test

## Notes

- This deployment method creates a **static site** - no server-side rendering or API routes
- All routing is handled client-side
- The `.htaccess` file ensures proper routing for client-side navigation
- If you need server-side features, you'll need Node.js hosting (not standard cPanel)

## Support

If you encounter issues:
1. Check cPanel error logs
2. Verify all files were uploaded correctly
3. Test with a simple HTML file first to ensure server is working
4. Contact your hosting provider if mod_rewrite is not enabled

