type CalorieDisplayProps = {
  calories: number;
  text: string;
};

export default function CalorieDisplay({calories,text} : CalorieDisplayProps) {
  return (
    <p className="text-white rounded-full text-center grid grid-cols-1 gap-3 font-bold ">
      <span className= "font-black text-6xl text-white">
        {calories}
      </span>
      {text}
    </p>
  );
}
