export default function LineBar({ msg }: { msg?: string }) {
    return (
        <>
            <div className="text-primary">{msg}</div>
            <div className="w-1/2 h-[1px] bg-primary-line" />
        </>
    );
}
