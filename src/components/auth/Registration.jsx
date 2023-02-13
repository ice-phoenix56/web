const Registration = (props) => {

    return (
        <div className="form-modal">
            <div className="title-modal">registration</div>
            <form>
                <div>
                    <label htmlFor="login"></label>
                    <input type="text" name="login" placeholder="Введите логин"/>
                </div>
                <div>
                    <label htmlFor="email"></label>
                    <input type="text" name="email" placeholder="Введите почту"/>
                </div>
                <div>
                    <label htmlFor="firstName"></label>
                    <input type="text" name="firstName" placeholder="Введите ваше имя"/>
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input type="password" name="password" placeholder="Введите пароль"/>
                </div>
                <div>
                    <label htmlFor="passwordRepeat"></label>
                    <input type="password" name="passwordRepeat" placeholder="Повторите пароль"/>
                </div>
                <div>
                    <label htmlFor="submit"></label>
                    <input type="submit" name="submit" value="Отправить"/>
                </div>
            </form>
        </div>
    )

};

export default Registration