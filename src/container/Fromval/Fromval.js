import React, { useState , Input, validation, form} from 'react';

function Fromval(props) {

    const [name, setname] = useState('')
    const [nameErr , setnameErr] = useState('')

    const [email, setemail] = useState('')
    const [emailErr, setemailErr] = useState('')

    const [number, setnumber] = useState('')
    const [numberErr, setnumberErr] = useState('')

    const [gender, setgender] = useState('')
    const [genderErr, setgenderErr] = useState('')

    const [city, setcity] = useState('')
    const [cityErr, setcityErr] = useState('')

    const [hobby, sethobby] = useState('')
    const [hobbyErr, sethobbyErr] = useState('')

    const validation = () => {
        console.log(name);
        if (name === '') {
            setnameErr("Please enter your name.")
        } else {
            setnameErr('')
        }

        if (email === '') {
            setemailErr("Please enter your email.")
        } else {
            setemailErr('')
        }

        if (number === '') {
            setnumberErr("Please enter your number.")
        } else {
            setnumberErr('')
        }

        if (gender === '') {
            setgenderErr("Please only 1 select.")
        } else {
            setgenderErr('')
        }

        if (city === '') {
            setcityErr("Please only 1 select.")
        } else {
            setcityErr('')
        }

        if (hobby === '') {
            sethobbyErr("Please only 2 select.")
        } else {
            sethobbyErr('')
        }

    }

    return (
        <div className='formval'>
            <form className='form1'>
                <input
                    id='name'
                    type='text'
                    placeholder="name"
                    onChange={evt => setname(evt.target.value)}
                />
                <span>{nameErr}</span>
            </form>

            <form className='form1'>
                <input
                    id='email'
                    type='email'
                    placeholder="email"
                    onChange={evt => setemail(evt.target.value)}
                />
                <span>{emailErr}</span>
            </form>

            <form className='form1'>
                <input
                    id='number'
                    type='number'
                    placeholder="number"
                    onChange={evt => setnumber(evt.target.value)}
                />
                <span>{numberErr}</span>
            </form>

            <form className='form1'>
                Gender:
                <input 
                    type='radio'
                    name='gender'
                    value='male'
                    onChange={evt => setgender(evt.target.value)}
                /> male

                 <input 
                    type='radio'
                    name='gender'
                    value='female'
                    onChange={evt => setgender(evt.target.value)}
                /> female

                <span>{genderErr}</span>
            </form>

            <from className='form1'>
                City:

                <select 
                    id='city'
                    name='city'
                    onChange={evt => setcity(evt.target.value)}
                >

                    <option value="">Select City</option>
                    <option value="Surat">Surat</option>
                    <option value="Bardoli">Bardoli</option>
                    <option value="Navsari">Navsari</option>
                </select>

                <span>{cityErr}</span>
            </from>

            <from  className='from1'>
                Hobby:
                <input 
                    type='radio'
                    name='hobby'
                    value='music'
                    onChange={evt => sethobby(evt.target.value)}
                /> music

                <input 
                    type='radio'
                    name='hobby'
                    value='cricket'
                    onChange={evt => sethobby(evt.target.value)}
                /> cricket

                <input 
                    type='radio'
                    name='hobby'
                    value='coding'
                    onChange={evt => sethobby(evt.target.value)}
                /> coding
                <span>{hobbyErr}</span>
            </from>
            

            <button onClick={validation}>Submit</button>
        </div>
    );
}

export default Fromval;


  
// </head>

// <body>
//     <form name="contactForm" onsubmit="return validateForm()" action="/examples/actions/confirmation.php" method="post">
//         <h2>Application Form</h2>
//         <div class="row">
//             <p>Full Name</p>
//             <input type="text" name="name">
//             <span class="error" id="nameErr"></span>
//         </div>
//         <div class="row">
//             <p>Email Address</p>
//             <input type="text" name="email">
//             <span class="error" id="emailErr"></span>
//         </div>
//         <div class="row">
//             <p>Mobile Number</p>
//             <input type="text" name="mobile">
//             <span class="error" id="mobileErr"></span>
//         </div>
//         <div class="row">
//             <p>Country</p>
//             <select name="country">
//                 <option value="0">Select</option>
//                 <option value="au">Australia</option>
//                 <option value="in">India</option>
//                 <option value="us">United States</option>
//                 <option value="uk">United Kingdom</option>
//             </select>
//             <span class="error" id="countryErr"></span>
//         </div>
//         <div class="row">
//             <p>Gender</p>
//             <span class="error" id="genderErr"></span>
//             <div class="form-inline">
//                 <p><input type="radio" name="gender" value="male"> Male</p>
//                 <p><input type="radio" name="gender" value="female"> Female</p>
//             </div>
            
//         </div>
//         <div class="row">
//             <p>Hobbies <i>(Optional)</i></p>
//             <span class="error" id="hobbyErr"></span>
//             <div class="form-inline">
//                 <p><input type="checkbox" name="hobbies" value="sports"> Sports</p>
//                 <p><input type="checkbox" name="hobbies" value="movies"> Movies</p>
//                 <p><input type="checkbox" name="hobbies" value="music"> Music</p>
//             </div>
//         </div>
//         <div class="row">
//             <input type="submit" value="Submit">
//         </div>
//     </form>
// </body>

// </html>