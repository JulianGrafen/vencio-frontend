import GoogleLoginButton from "./GoogleLoginButton";
import LoginButton from "./LoginButton";

function login() {
  return (
    <form className="w-full h-[490px] bg-loginBackground mt-3 drop-shadow-md">
      <div>
        <h1 className="pt-6 text-xl font-poppins font-bold text-xl">Sign Up</h1>
        <input
          type="text"
          className="w-[300px]  p-2 bg-transparent text-sm border-b-4 border-black outline-none mt-6 "
          placeholder="E-Mail"
        />
      </div>
      <div>
        <input
          type="text"
          className="w-[300px] bg-transparent p-2 text-sm border-b-4 border-black outline-none mt-8"
          placeholder="Password"
        />
        <div className="mt-3 font-poppins underline font-bold">or login</div>
        <div className="flex justify-center mt-2">
          <LoginButton />
        </div>
        <div className="flex justify-center mt-2">
          <GoogleLoginButton />
        </div>
      </div>
    </form>
  );
}

export default login;
