"use client";

import { useState } from "react";
import { Card, Button, Link, TextField, Label, InputGroup, Input } from "@heroui/react";
import {
    Eye,
    EyeSlash,
    At,
    ShieldKeyhole,
} from "@gravity-ui/icons";

import { signIn } from "@/lib/auth-client";

export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState("");

    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleSignIn = async (e) => {
        e.preventDefault();

        setError("");
        setIsLoading(true);

        try {
            const { error: authError } = await signIn.email({
                email,
                password,
                callbackURL: "/",
            });

            if (authError) {
                setError(authError.message || "Invalid credentials");
            }
        } catch (err) {
            setError("Something went wrong.");
        } finally {
            setIsLoading(false);
        }
    };

    // const handleGoogleSignIn = async () => {
    //     try {
    //         await signIn.social({
    //             provider: "google",
    //             callbackURL: "/",
    //         });
    //     } catch (err) {
    //         setError("Google sign in failed.");
    //     }
    // };

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4">
            <Card className="w-full max-w-md p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">

                {/* Header */}
                <div className="flex flex-col items-center justify-center gap-1 pb-6 border-b border-zinc-100 dark:border-zinc-800 mb-6 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                        Welcome Back
                    </h1>

                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        Sign in to continue
                    </p>
                </div>

                <form onSubmit={handleSignIn} className="flex flex-col gap-5">

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
                                placeholder="Enter your password"
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

                    {/* Error */}
                    {error && (
                        <div className="p-3 rounded-xl text-sm bg-red-100 text-red-700 border border-red-200">
                            {error}
                        </div>
                    )}

                    {/* Sign In Button */}
                    <Button
                        type="submit"
                        color="primary"
                        className="w-full h-12 rounded-xl font-semibold"
                        isLoading={isLoading}
                    >
                        Sign In
                    </Button>

                    {/* Divider */}
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-zinc-200 dark:border-zinc-800" />
                        </div>

                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white dark:bg-zinc-950 px-2 text-zinc-500">
                                Or continue with
                            </span>
                        </div>
                    </div>

                    {/* Google Sign In */}
                    <Button
                        type="button"
                        variant="bordered"
                        className="w-full h-12 font-medium"
                       
                    >
                        Google
                    </Button>

                    {/* Footer */}
                    <div className="text-center pt-4 border-t border-zinc-100 dark:border-zinc-800 text-sm text-zinc-600 dark:text-zinc-400">
                        Don not have an account?{" "}
                        <Link
                            href="/auth/signup"
                            className="font-medium text-blue-600"
                        >
                            Sign Up
                        </Link>
                    </div>
                </form>
            </Card>
        </div>
    );
}