const Joi = require('joi')

const stakeSchema = Joi.object({
    address: Joi.string().required(),
    tokenId: Joi.string().required(),
    created: Joi.number().required()
})

module.exports = {stakeSchema}