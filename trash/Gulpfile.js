var environment = process.env.environment;

if (!environment) {
    require('./gulp/local');
} else if (environment === 'dev') {
    require('./gulp/dev')
} else if (environment === 'qa') {
    //build for qa, final prod code, needs to match production or staging.  data is the same as dev data
} else if (environment === 'staging') {
    //build for staging, final prod code, and sample production data
} else if (environment === 'prod') {
    //build for production, final live prod code, and live prod data
}

