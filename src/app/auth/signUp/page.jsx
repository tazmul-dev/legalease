"use client";

import { useState } from "react";
import { Card, Button, Link, TextField, Label, InputGroup, Input } from "@heroui/react";
import {
    Eye,
    EyeSlash,
    Person,
    At,
    ShieldKeyhole,
} from "@gravity-ui/icons";

import { signUp } from "@/lib/auth-client";

export default function SignupPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("user");
    const [password, setPassword] = useState("");
    const [image, setImage] =useState('')
    const [confirmPassword, setConfirmPassword] = useState("");

    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleSignup = async (e) => {
        e.preventDefault();

        setError("");
        setSuccess("");

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        setIsLoading(true);

        try {
            const { data, error: authError } = await signUp.email({
                email,
                password,
                name,
                image,
                role,
                callbackURL: "/auth/signIn",
            });
            console.log(data)


            if (authError) {
                setError(authError.message || "Signup failed.");
                return;
            }



            setSuccess("Account created successfully!");

            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setRole("user");
        } catch (err) {
            console.error(err);
            setError("An unexpected error occurred.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4 py-10">
            <Card className="w-full max-w-md p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">

                {/* Header */}
                <div className="flex flex-col items-center justify-center gap-1 pb-6 border-b border-zinc-100 dark:border-zinc-800 mb-6 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                        Join LawHire
                    </h1>

                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        Create an account as a User or Lawyer
                    </p>
                </div>

                <form onSubmit={handleSignup} className="flex flex-col gap-5">

                    {/* Name */}
                    <TextField isRequired>
                        <Label className="text-sm font-medium">
                            Full Name
                        </Label>

                        <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900">
                            <Person size={16} className="text-zinc-400" />

                            <Input
                                placeholder="Enter your full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-transparent py-2 border-none outline-none"
                            />
                        </InputGroup>
                    </TextField>

                     <TextField>
                        <Label className="text-sm font-medium">
                          Image url
                        </Label>

                        <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900">
                            <Person size={16} className="text-zinc-400" />

                            <Input
                                placeholder="Enter image usr"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                className="w-full bg-transparent py-2 border-none outline-none"
                            />
                        </InputGroup>
                    </TextField>


                    {/* Email */}
                    <TextField isRequired>
                        <Label className="text-sm font-medium">
                            Email Address
                        </Label>

                        <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900">
                            <At size={16} className="text-zinc-400" />

                            <Input
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-transparent py-2 border-none outline-none"
                            />
                        </InputGroup>
                    </TextField>

                    {/* Role */}
                    <div className="flex flex-col gap-1.5">
                        <Label className="text-sm font-medium">
                            Join As
                        </Label>

                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-3 py-3 text-sm outline-none"
                        >
                            <option value="user">User</option>
                            <option value="lawyer">Lawyer</option>
                        </select>
                    </div>

                    {/* Password */}
                    <TextField isRequired>
                        <Label className="text-sm font-medium">
                            Password
                        </Label>

                        <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900">
                            <ShieldKeyhole
                                size={16}
                                className="text-zinc-400"
                            />

                            <Input
                                type={isVisible ? "text" : "password"}
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                className="w-full bg-transparent py-2 border-none outline-none"
                            />

                            <button
                                type="button"
                                onClick={toggleVisibility}
                                className="text-zinc-400 hover:text-zinc-600"
                            >
                                {isVisible ? (
                                    <EyeSlash size={18} />
                                ) : (
                                    <Eye size={18} />
                                )}
                            </button>
                        </InputGroup>
                    </TextField>

                    {/* Confirm Password */}
                    <TextField isRequired>
                        <Label className="text-sm font-medium">
                            Confirm Password
                        </Label>

                        <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900">
                            <ShieldKeyhole
                                size={16}
                                className="text-zinc-400"
                            />

                            <Input
                                type={isVisible ? "text" : "password"}
                                placeholder="Confirm password"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                className="w-full bg-transparent py-2 border-none outline-none"
                            />
                        </InputGroup>
                    </TextField>

                    {/* Error */}
                    {error && (
                        <div className="p-3 rounded-xl text-sm bg-red-100 text-red-700 border border-red-200">
                            {error}
                        </div>
                    )}

                    {/* Success */}
                    {success && (
                        <div className="p-3 rounded-xl text-sm bg-green-100 text-green-700 border border-green-200">
                            {success}
                        </div>
                    )}

                    {/* Submit */}
                    <Button
                        type="submit"
                       
                        radius="xl"
                        className="w-full h-12 font-semibold shadow-sm bg-zinc-900 hover:bg-zinc-800 text-gray-500 dark:bg-zinc-50 dark:hover:bg-zinc-200 dark:text-zinc-900 transition-all duration-200 mt-2"
                        isLoading={isLoading}
                        isDisabled={isLoading}
                    >
                        Create Account
                    </Button>

                    {/* Footer */}
                    <div className="text-center pt-4 border-t border-zinc-100 dark:border-zinc-800 text-sm text-zinc-600 dark:text-zinc-400">
                        Already have an account?{" "}
                        <Link
                            href="/auth/signIn"
                            className="font-medium text-blue-600"
                        >
                            Sign In
                        </Link>
                    </div>
                </form>
            </Card>
        </div>
    );
}