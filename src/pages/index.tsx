import { Searchbar } from "../components";

export default function Home() {
  return (
    <div className={"flex flex-col items-center relative justify-center h-screen mb-0 gap-4"}>
      <h1 className={"text-white text-6xl absolute top-10 font-normal"}>Weather APP</h1>
      <h2 className={"text-white text-3xl translate-x-[-70%] "}>Find your city</h2>
      <Searchbar />
    </div>
  );
}
