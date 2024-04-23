
interface IProps {
    message: string;
}
export default function AlertSuccess(props: IProps) {

    return (
        <div className="alert alert-success" role="alert">
            {props.message}
        </div>
    );
}
