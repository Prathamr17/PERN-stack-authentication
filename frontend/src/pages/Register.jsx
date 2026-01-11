import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = ({ setUser }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const res = await axios.post('/api/auth/register', form);
        setUser(res.data.user);
        navigate('/');
    }catch(err){
        setError(err.response.data.message);
    }
  };

  return (
    <div className='min-h-[80vh] flex items-center justify-center bg-gray-100 w-full p-4'>
    <form className='bg-white p-6 rounded shadow-md w-full max-w-lg' onSubmit={handleSubmit}>
      <h2 className='text-2xl mb-6 font-bold text-center text-gray-800'>Register</h2>
        {error && <div className='text-red-500 mb-4'>{error}</div>}
      <input
        type="text"
        placeholder="Name"
        className="border p-2 w-full mb-3"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      
      <input
        type="email"
        placeholder="email"
        className="border p-2 w-full mb-3"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full mb-3"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button className='bg-blue-500 text-white p-2 w-full'>Register</button>
      {/* {!error && <h4 className='text-green-500 font-bold' >Registration successful!</h4>} */}
    </form>
    </div>

  );
};

export default Register;
