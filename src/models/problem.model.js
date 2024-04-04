import mongoose from 'mongoose';


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
    editorial :{
        type:String
    }
})

const problem = mongoose.model('problem',problemSchema);

module.exports = problem;

/**
 * [{input:'5',output:'10},{input:'2',output:'20}]
 * 
 * \n
 * 2 3 4 56 \n // multiple lines in the input
 * 8
 * 
 * 1 3
 */