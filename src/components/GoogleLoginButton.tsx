import googleLogo from "../assets/googleLogo";

function GoogleLoginButton() {
  return (
    <div className="flex mt-2 justify-center text-white bg-black w-[300px] h-[55px]">
      <img src={googleLogo} alt={googleLogo} />
      <p className="font-poppins mt-3">Sign in with Google</p>
    </div>
  );
}

export default GoogleLoginButton;
