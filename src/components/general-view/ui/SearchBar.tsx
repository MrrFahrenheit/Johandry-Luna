import SearchIcon from '../../../assets/images/Search.png';

export default function SearchBar({changeText, placeHolder}:{changeText?:Function, placeHolder?:string}) {
    return (
        <div className="w-full max-w-md mx-auto flex items-center justify-center">
            <img src={SearchIcon} className="mr-2 size-5" />
            <input type='text' className='bg-zinc-900 border-md p-1 w-1/2 rounded-lg dmc-font' onChange={(e) => changeText && changeText(e.target.value)}
            placeholder={placeHolder || "Type a title or category"} />
        </div>
    )
}
