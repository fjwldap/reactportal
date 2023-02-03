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
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </div>
                <div className="copyright">
                    &nbsp; &nbsp;COPYRIGHT(C) 2022 react portal ALL
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
                            <option value="https://ko.reactjs.org/">리액트</option>
                            <option value="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started">getting started</option>
                        </select>
                    </div>
                </div>
            </div>
        </footer>
    );

}

export default Footer;