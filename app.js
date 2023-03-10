const express = require('express');
const path = require("path");
const {nextTick} = require('process');
const Employee = require('/Users/foreveroptimist/sei/deliverables/hackathon/EmployeeMx/model/Employees.js')
const methodOverride = require('method-override');

const app = express();

const samples = [{
    name: "Billy Bryant",
    image: "https://usveteransmagazine.com/wp-content/webp-express/webp-images/uploads/2017/10/Interview-Tips-1.jpg.webp",
    department: "Accounting",
    position: "Finance Manager II",
    salary: "$110,000"
 },{
    name: "Caleb Jordan",
    image: "https://images.yourstory.com/cs/21/0a385fc03e6011e999df3d1594bbde2c/Imagelvdw-1580066012464.jpg",
    departnent: "Human Resources",
    position: "HR Director",
    salary: "$85,000"
 },
 {
    name: "Melanie Cartwright",
    image: "https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=2000&t=st=1678474947~exp=1678475547~hmac=9cd29c34bdba7b8e3a770095788237d9864a38a88ee75ea8d8901a9659365894",
    departnent: "Sales",
    position: "Sales Consultant",
    salary: "$75,000"
 },
 {
    name: "Tiffany Sanchez",
    image: "https://assets.entrepreneur.com/content/3x2/2000/20190215114938-Funding-African-american-business-woman.jpeg?format=pjeg&auto=webp&crop=16:9&width=675&height=380",
    departnent: "IT",
    position: "Data Analyst",
    salary: "$135,000"
 },
 {
    name: "Randy Norman",
    image: "https://as2.ftcdn.net/v2/jpg/02/83/12/91/1000_F_283129167_25SBcKmc8Dj7q15bTAMChqXbEVCg4Kxx.jpg",
    departnent: "Operations",
    position: "Operations Manager",
    salary: "$100,000"
 }]



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

app.get('', async(req, res, next) => {
    try {
        const db = await Employee.insertMany()
        res.render('home.ejs');
        console.log('Successful Seeding');
    } catch(error) {
        console.log(error);
        next();
    }
   

})

app.listen(4000, () =>{
    console.log('Listening on Port 4000');
});