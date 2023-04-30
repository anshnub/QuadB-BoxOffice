
export default function AppTitle(props) {
    const{title="Box Office",subtitle = "Are u looking movie"} = props;


    return (
        <div>

        <h1>
            
            {title}
        </h1>

        <p> {subtitle}</p>


        </div>
    )
}