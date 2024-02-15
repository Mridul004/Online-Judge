const mongoose = require('mongoose');
const autoincrement = require('simple-mongoose-autoincrement');

const problemSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: {
    type: String,
    required: [true, 'A problem must have a name!'],
    trim: true,
  },
  tags: [
    {
      type: String,
    },
  ],
  difficulty: {
    type: Number,
  },
  description: {
    type: String,
    required: [true, 'A problem must have a description!'],
    trim: true,
  },
  // add constraintDescription, inputDescription, outputDescription
  openTestCases: [
    {
      input: String,
      output: String,
    },
  ],
  closedTestCases: [
    {
      input: String,
      output: String,
    },
  ],
  note: {
    type: String,
    trim: true,
  },
  author: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
  },
  timeLimit: {
    type: Number,
    default: 1000, // in ms
  },
  memoryLimit: {
    type: Number,
    default: 268435456, // 256 MB
  },
  stat: {
    submissions: { type: Number, default: 0 },
    ac: { type: Number, default: 0 },
    tle: { type: Number, default: 0 },
    wa: { type: Number, default: 0 },
    mle: { type: Number, default: 0 },
    re: { type: Number, default: 0 },
  },
});

problemSchema.plugin(autoincrement, { field: 'id' });
const problemModel = mongoose.model('Problem', problemSchema);
module.exports = problemModel;
