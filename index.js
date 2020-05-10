const alexa = require('ask-sdk');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === "LaunchRequest"
    }, handle(handlerInput) {
        const responseBuilder = handlerInput.responseBuilder;
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        let attributes = handlerInput.attributesManager.getSessionAttributes();
        console.log('========',requestAttributes, attributes)
        const speechText = `Hello, Welcome to Word Chain `;
        console.log("SPEECH", speechText);
        let imageURL = `https://shapesoliverandnico.s3.amazonaws.com/Images/1_Home.png`;
        console.log("ECHO")
        if (supportsDisplay(handlerInput)) {
            const bgImage = new alexa.ImageHelper()
                .addImageInstance(imageURL)
                .getImage();
            const primaryText = new alexa.RichTextContentHelper()
                .withPrimaryText(`<font size="7"> </font>`)
                .getTextContent();
            responseBuilder.addRenderTemplateDirective({
                type: "BodyTemplate6",
                backButton: 'HIDDEN',
                backgroundImage: bgImage,
                title: '',
                textContent: primaryText,
            });
        }

        return handlerInput.responseBuilder
            // .withStandardCard('Welcome', 'Say Knock Knock', imageURL, imageURL)
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
}

const skillBuilder = alexa.SkillBuilders.standard();

exports.handler = skillBuilder
    .addRequestHandlers(
        LaunchRequestHandler,
    )
    .lambda()