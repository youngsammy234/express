import joi from "joi";

export const registerBookschema = joi.object({
    title: joi.string().required(),
    author:joi.string().required(),
    genre:joi.string().required()
});strict();