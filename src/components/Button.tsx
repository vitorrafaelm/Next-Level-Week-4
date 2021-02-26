interface ButtonProps{
    color: string; 
    children: string; 
}

export function Button(props: ButtonProps){
    return (
        <button style={{background: props.color, border: 'none'}} type="button">
            {props.children}
            <strong>Teste</strong>
        </button>
    )
}