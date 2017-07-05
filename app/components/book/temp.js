(
    <li key={index} className="clearfix">
        <img src={item.image} className="left"/>
        <div className="right intro">
            <p>
                <label>{ '书名: ' }</label> 
                <span>{item.title}</span>
            </p>
            <p>
                <label>{ '作者: ' }</label>
                <span>
                    {
                        item.author.map((elem) => {
                            return elem
                        })
                    }
                </span>
            </p>
            <p>
                <label>{ '标签: ' }</label>
                <span>
                    { '暂无' }
                </span>
            </p>
            <p className="summary">
                <label>{ '简介: ' }</label>
                <span>
                    {item.summary}
                </span>
            </p>
        </div>
    </li>
)