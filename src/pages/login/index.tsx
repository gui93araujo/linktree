import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { useState, FormEvent } from "react";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
  }

  return (
    <div className="flex w-full h-screen items-center justify-center flex-col">
      <Link to="/">
        <h1 className="mt-11 text-white mb-7 font-bold text-5xl">
          Dev
          <span className="bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">
            Link
          </span>
        </h1>
      </Link>
      <form
        className="w-full max-w-xl flex flex-col px-2"
        onSubmit={handleSubmit}
      >
        <Input
          placeholder="Digite seu email..."
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="**********"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="h-9 bg-blue-600 rounded border-0 text-lg font-medium text-white cursor-pointer"
        >
          Acessar
        </button>
      </form>
    </div>
  );
}
