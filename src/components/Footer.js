function Footer(props) {
    let site = "";

    function moveToSite(e) {
        // family site 이동
        site = e.target.value;
        window.open(site);
        site = "";
    };

    return (
        <footer>
            <div className="area">
                <div className="terms">

                </div>
                <div className="copyright">
                    &nbsp; &nbsp;COPYRIGHT(C) 2021 kt sat CORP. ALL
                    RIGHT RESERVED.
                    <p>
                    </p>
                </div>
                <div className="right_box">
                    <div>
                        <select
                            style={{ width: 130 }}
                            className="form"
                            onChange={moveToSite}
                            value={site}
                        >
                            <option value="">FAMILY SITE</option>
                            <option value="http://kt.com">KT</option>
                            <option value="https://www.ktsat.com">kt sat</option>
                            <option value="https://www.ktds.com">kt ds</option>
                        </select>
                    </div>
                </div>
            </div>
        </footer>
    );

}

export default Footer;