import React from 'react';
import { Form, Button } from 'react-bootstrap';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../Component/Navbar/Navbar';
import { useForm } from 'react-hook-form'
// import { Alert } from 'react-bootstrap';



const CreateRecipePage = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    // const [show, setShow] = useState(true)
    // const [serverResponse, setServerResponse] = useState('')

    const createRecipe = (data) => {
        console.log(data)

        const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY');
        console.log(token)

        const requestOptions = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${JSON.parse(token)}`
            },
            body: JSON.stringify(data)

        }
        fetch('/recipe/recipes', requestOptions)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            // setServerResponse(data.message)
            // console.log(serverResponse)

            // setShow(true)
            reset()
        })
        .catch(err => console.log(err))


    }

    return(
        <>
        <Navbar/>
        
        <div className="container">

        {/* {show?
          <>
            <Alert className="mt-5" variant="success" onClose={() => setShow(false)} dismissible>
              <p>
                  Saved Successfully
                {serverResponse}
              </p>
            </Alert>
            <h1>Create Form</h1>
            </>
            :
            
        } */}
            <h1>Create Form</h1>
            <br></br>
            <form>
            <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="title"
                    {...register("title", { required: true, maxLength: 25})}
                    />
                </Form.Group>
                    {errors.title && <p><small style={{ color: 'red' }}>Title is required</small></p>}
                {errors.title?.type === "maxLength" && <p>
                    <small style={{ color: 'red' }}>Title should be less than 25 characters</small>
                </p>}
                <br></br>


                <Form.Group>
                    <Form.Label>description</Form.Label>
                    <Form.Control type="text" placeholder="description"
                    {...register('description', { required: true, maxLength: 255 })}
                    />
                </Form.Group>
                    {errors.description && <p><small style={{ color: 'red' }}>Description is required</small></p>}
                {errors.description?.type === "maxLength" && <p>
                    <small style={{ color: 'red' }}>Description should be less than 255 characters</small>
                </p>}

                <br></br>
                <Form.Group>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="full name"
                    {...register("full_name", { required: true, maxLength: 25})}
                    />
                </Form.Group>
                    {errors.full_name && <p><small style={{ color: 'red' }}>Full Name is required</small></p>}
                {errors.full_name?.type === "maxLength" && <p>
                    <small style={{ color: 'red' }}>Full Name should be less than 25 characters</small>
                </p>}
                <br></br>
                
                <Form.Group>
                    <Form.Label>CNI</Form.Label>
                    <Form.Control type="textarea" row={5}
                    placeholder="cni"
                    {...register('CNI', { required: true, maxLength: 255 })}
                    />
                </Form.Group>
                    {errors.CNI && <p><small style={{ color: 'red' }}>CNI is required</small></p>}
                {errors.CNI?.type === "maxLength" && <p>
                    <small style={{ color: 'red' }}>CNI should be less than 255 characters</small>
                </p>}

                <br></br>

                <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" 
                    placeholder="phone number"
                    {...register('phone_number', { required: true, maxLength: 255 })}
                    />
                </Form.Group>
                    {errors.phone_number && <p><small style={{ color: 'red' }}>Phone Number is required</small></p>}
                {errors.phone_number?.type === "maxLength" && <p>
                    <small style={{ color: 'red' }}>Phone Number should be 10 number</small>
                </p>}

                <br></br>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="email"
                    {...register('email', { required: true, maxLength: 255 })}
                    />
                </Form.Group>
                    {errors.email && <p><small style={{ color: 'red' }}>Email is required</small></p>}
                {errors.email?.type === "maxLength" && <p>
                    <small style={{ color: 'red' }}>Email should be less than 255 characters</small>
                </p>}

                <br></br>

                <Form.Group>
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number"  
                    placeholder="age"
                    {...register('age', { required: true, maxLength: 255 })}
                    />
                </Form.Group>
                    {errors.age && <p><small style={{ color: 'red' }}>Age is required</small></p>}
                {errors.age?.type === "maxLength" && <p>
                    <small style={{ color: 'red' }}>Age should be 10 number</small>
                </p>}

                <br></br>
                <Form.Group>
                    <Form.Label>Gender</Form.Label>
                    <Form.Select aria-label="Default select example" 
                    {...register('gender', { required: true, maxLength: 255 })}>
                      <option className="text-black-50">Please select</option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                    </Form.Select>
                    {/* <Form.Control type="textarea" row={5} placeholder="gender"
                    {...register('gender', { required: true, maxLength: 255 })}
                    /> */}
                </Form.Group>
                    {errors.gender && <p>
                        <small style={{ color: 'red' }}>gender is required</small></p>}
                    {errors.gender?.type === "maxLength" && <p>
                    <small style={{ color: 'red' }}>gender should be less than 255 characters
                    </small></p>}
                
                <br></br>

                <Form.Group>
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" placeholder="state"
                    {...register('state', { required: true, maxLength: 255 })}
                    />
                </Form.Group>
                    {errors.state && <p><small style={{ color: 'red' }}>State is required</small></p>}
                {errors.state?.type === "maxLength" && <p>
                    <small style={{ color: 'red' }}>State should be less than 255 characters</small>
                </p>}

                <br></br>

                <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="city"
                    {...register('city', { required: true, maxLength: 255 })}
                    />
                </Form.Group>
                    {errors.city && <p><small style={{ color: 'red' }}>City is required</small></p>}
                {errors.city?.type === "maxLength" && <p>
                    <small style={{ color: 'red' }}>City should be less than 255 characters</small>
                </p>}

                <br></br>

                <Form.Group>
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="address"
                    {...register('address', { required: true, maxLength: 255 })}
                    />
                </Form.Group>
                    {errors.address && <p><small style={{ color: 'red' }}>address is required</small></p>}
                {errors.address?.type === "maxLength" && <p>
                    <small style={{ color: 'red' }}>address should be less than 255 characters</small>
                </p>}

                <br></br>

                <Form.Group>
                    <Form.Label>Marital Status</Form.Label>
                    <Form.Control type="text" placeholder="marital status"
                    {...register('marital_status', { required: true, maxLength: 255 })}
                    />
                </Form.Group>
                    {errors.marital_status && <p><small style={{ color: 'red' }}>Marital Status is required</small></p>}
                {errors.marital_status?.type === "maxLength" && <p>
                    <small style={{ color: 'red' }}>Marital Status should be less than 255 characters</small>
                </p>}

                <br></br>

                <Form.Group>
                    <Form.Label>Number of Children</Form.Label>
                    <Form.Control type="number" placeholder="number of children"
                    {...register('number_of_children', { required: true, maxLength: 255 })}
                    />
                </Form.Group>
                    {errors.number_of_children && <p><small style={{ color: 'red' }}>Number of Children is required</small></p>}
                {errors.number_of_children?.type === "maxLength" && <p>
                    <small style={{ color: 'red' }}>Number of Children should be less than 25 number</small>
                </p>}
                

                <br></br>

                <Form.Group>
                    <Form.Label>Occupation (job)</Form.Label>
                    <Form.Control type="text" placeholder="occupation"  
                    {...register('occupation', { required: true, maxLength: 255 })}
                    />
                </Form.Group>
                    {errors.occupation && <p>
                        <small style={{ color: 'red' }}>Occupation is required</small></p>}
                    {errors.occupation?.type === "maxLength" && <p>
                    <small style={{ color: 'red' }}>Occupation should be less than 255 characters</small>
                </p>}

                <br></br>

                <Form.Group>
                    <Form.Label>Salary</Form.Label>
                    <Form.Control type="number" placeholder="salary"  
                    {...register('salary', { required: true, maxLength: 255 })}
                    />
                </Form.Group>
                    {errors.salary && <p>
                        <small style={{ color: 'red' }}>Salary is required</small></p>}
                    {errors.salary?.type === "maxLength" && <p>
                    <small style={{ color: 'red' }}>Salary should be less than 255 characters</small>
                </p>}

                <br></br>
                <Form.Group>
                    <Button variant="primary" onClick={handleSubmit(createRecipe)}>Save</Button>
                </Form.Group>
                <Form.Group></Form.Group>
                <br></br><br></br>
            </form>
        </div>
        </>
    )

}

export default CreateRecipePage;