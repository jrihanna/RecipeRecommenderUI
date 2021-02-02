function OtherDetails(props) {
    return (
        <table className={props.className}>
        <tbody>
            {props.otherDetails.map((dtls, index) => {
                return (<tr key={'recipe-detail-other-' + index}>
                    <td>{dtls.name}</td>
                    <td>{dtls.value}</td>
                </tr>)
            })}
        </tbody>
    </table>
    );
}

export default OtherDetails;
