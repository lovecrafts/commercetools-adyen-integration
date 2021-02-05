const { ensurePaymentCustomType } = require('./ensure-payment-custom-type')
const {
  ensureInterfaceInteractionCustomType,
} = require('./ensure-interface-interaction-custom-type')
const { ensureApiExtensions } = require('./ensure-api-extensions')

function ensureCustomTypes(ctpClient, ctpProjectKey) {
  return Promise.all([
    ensurePaymentCustomType(ctpClient, ctpProjectKey),
    ensureInterfaceInteractionCustomType(ctpClient, ctpProjectKey),
  ])
}

function ensureResources(ctpClient, ctpProjectKey, apiExtensionBaseUrl) {
  return Promise.all([
    ensureCustomTypes(ctpClient, ctpProjectKey),
    ensureApiExtensions(ctpClient, ctpProjectKey, apiExtensionBaseUrl),
  ])
}

module.exports = {
  ensureResources,
}
