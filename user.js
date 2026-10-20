// Disable Mozilla / Firefox Accounts
user_pref("identity.fxaccounts.enabled", false);
// Disable shortened address bar URLs
user_pref("browser.urlbar.trimURLs", false);
// Enable userChrome.css customization
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
// For Firefox Developer Edition, enable unsigned extensions
//user_pref("xpinstall.signatures.required", false);