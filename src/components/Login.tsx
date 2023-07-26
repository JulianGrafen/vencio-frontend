function login() {
  return (
    <form className="w-full h-[490px] bg-loginBackground mt-3">
      <div>
        <input
          type="text"
          className="w-[300px]  p-2 bg-transparent text-sm border-b-4 border-black outline-none "
          placeholder="E-Mail"
        />
      </div>
      <div>
        <input
          type="text"
          className="w-[300px] bg-transparent p-2 text-sm border-b-4 border-black outline-none mt-8"
          placeholder="Password"
        />
      </div>
    </form>
  );
}

export default login;
