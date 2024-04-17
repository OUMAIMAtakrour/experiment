import React, { useState } from "react";
import axiosClient from "../helpers/axios";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../Contexts/ContextProvider";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({ __html: "" });
    const navigate = useNavigate();
    const { setCurrentUser, setUserToken } = useStateContext();

    const onSubmit = (ev) => {
        ev.preventDefault();
        setError({ __html: "" });

        axiosClient
            .post("/signup", {
                name: name,
                email,
                password,
            })
            .then(({ data }) => {
                setCurrentUser(data.user);
                localStorage.setItem("userToken", data.access_token);

                navigate("/home");
            })
            .catch(({ error }) => {
                if (error.response) {
                    const finalErrors = Object.values(
                        error.response.data.errors
                    ).reduce((accum, next) => [...accum, ...next], []);
                    console.log(finalErrors);
                    setError({ __html: finalErrors.join("<br>") });
                }
                console.error(error);
            });
    };

    return (
        <div className="sign-up-page bg-gray-900 text-white py-20 px-4 md:px-8">
            <div className="sign-up-container max-w-md mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Sign Up</h2>
                <form
                    className="bg-gray-800 rounded-md p-8"
                    onSubmit={onSubmit}
                    method="POST"
                >
                    <div className="mb-6">
                        <label
                            htmlFor="name"
                            className="block text-gray-400 font-bold mb-2"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id
                            placeholder="Full name"
                            value={name}
                            onChange={(ev) => setName(ev.target.value)}
                            required
                            className="bg-gray-700 text-white rounded-md py-2 px-4 block w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block text-gray-400 font-bold mb-2"
                        >
                            Email
                        </label>
                        <input
                            name="email"
                            id
                            placeholder="Email Address"
                            value={email}
                            onChange={(ev) => setEmail(ev.target.value)}
                            className="bg-gray-700 text-white rounded-md py-2 px-4 block w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-gray-400 font-bold mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id
                            placeholder="Password"
                            value={password}
                            onChange={(ev) => setPassword(ev.target.value)}
                            className="bg-gray-700 text-white rounded-md py-2 px-4 block w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-md transition-colors duration-300 block w-full"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
