const Authorization = (props) => {

    return (
        <div className="form-modal">
            <div className="title-modal">Авторизация</div>
            <form>
                <div>
                    <label htmlFor="login"></label>
                    <input type="text" name="login" placeholder="введите логин или почту"/>
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input type="password" name="password" placeholder="введите пароль"/>
                </div>
                <div>
                    <label htmlFor="login"></label>
                    <input type="submit" value="Отправить"/>
                </div>
            </form>
        </div>
    )

};

export default Authorization