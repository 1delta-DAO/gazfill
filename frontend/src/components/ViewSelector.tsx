import { transition } from "./utils";

interface ViewSelectorProps {
  views: string[];
  setView: (view: string) => void;
  selectedView: string;
}

export const ViewSelector: React.FC<ViewSelectorProps> = ({ views, setView, selectedView }) => {
  const selectedStyle = (view: string) => {
    return view === selectedView ? 'bg-zinc-800 border-zinc-800 hover:bg-zinc-800' : 'bg-zinc-950 border-zinc-800 hover:bg-zinc-800';
  }

  return (
    <div className="flex w-full gap-2">
      {
        views.map((view, index) => {
          return (
            <span
              key={index}
              className={`w-full text-center ${selectedStyle(view)} p-2 rounded-md cursor-pointer border-2 ${transition}`}
              onClick={() => setView(view)}
            >
              {view}
            </span>
          )
        })
      }
    </div>
  )
}