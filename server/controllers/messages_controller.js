let messages = [];
let id = 0;

module.exports = {
    create: ( request, result ) => {
        const { text, time } = request.body;
        messages.push( { id, text, time } );
        id++;
        result.status(200).send(messages);
    },

    read: ( request, result ) => {
        result.status(200).send(messages);
    },

    update: ( request, result ) => {
        const { text } = request.body;
        const updateID = request.params.id;
        const messageIndex = messages.findIndex( message => message.id == updateID );
        let message = messages[ messageIndex ];

        messages[ messageIndex ] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        };
        result.status(200).send(messages);
    },

    delete: ( request, result ) => {
        const deleteID = request.params.id;
        messageIndex = messages.findIndex( message => message.id == deleteID );
        messages.splice(messageIndex, 1);
        result.status(200).send(messages);
    }
};