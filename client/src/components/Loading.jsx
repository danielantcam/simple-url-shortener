export default function Loading(){
    return <div 
        role="status"
        aria-live="polite"
        className="flex justify-center items-center gap-4 my-20"
    >
        <span className="sr-only">Loading...</span>
        <div aria-hidden="true" className="w-6 h-6 rounded-full bg-blue-500 animate-bounce"></div>
        <div aria-hidden="true" className="w-6 h-6 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div aria-hidden="true" className="w-6 h-6 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
    </div>;
}