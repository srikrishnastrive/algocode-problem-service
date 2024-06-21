const mongoose = require('mongoose');


const problemSchema = new mongoose.Schema({
    title :{
        type:String,
        required : [true,'Title cannot be empty']
    },
    description : {
        type:String,
        required : [true, 'Description cannot be empty']
    },
    difficulty :{
        type: String,
        enum :['easy','medium','hard'],
        required :[true,'Difficulty cannot be empty'],
        default:'easy'
    },
    testCases: [
        {
            input :{
                type:String,
                required:true
            },
            output:{
                type: String,
                required: true
            }
        }
    ],
    codeStubs :[
        {
            language: {
                type: String,
                enum : ["CPP","JAVA","PYTHON"],
                required: true
            },
            startSnippet: {
                type: String,
               
            },
            userSnippet : {
                type: String,
               
            },
            endSnippet : {
                type: String,
                
            }
            

        }
    ],
    editorial :{
        type:String
    }
})

const problem = mongoose.model('problem',problemSchema);


/**
 * [{input:'5',output:'10},{input:'2',output:'20}]
 * 
 * \n
 * 2 3 4 56 \n // multiple lines in the input
 * 8
 * 
 * 1 3
 */
module.exports = problem;