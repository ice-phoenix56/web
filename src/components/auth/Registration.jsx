const Registration = (props) => {

    return (
        <div className="form-modal">
            <div className="title-modal">registration</div>
            <form>
                <div>
                    <label htmlFor="login"></label>
                    <h3>Введите логин</h3>
                    <input type="text" name="login" placeholder="Введите логин"/>
                </div>
                <div>
                    <label htmlFor="email"></label>
                    <h3>Введите почту</h3>
                    <input type="text" name="email" placeholder="Введите почту"/>
                </div>
                <div>
                    <label htmlFor="firstName"></label>
                    <h3>Введите ваше имя</h3>
                    <input type="text" name="firstName" placeholder="Введите ваше имя"/>
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <h3>Введите пароль</h3>
                    <input type="password" name="password" placeholder="Введите пароль"/>
                </div>
                <div>
                    <label htmlFor="passwordRepeat"></label>
                    <h3>Повторите пароль</h3>
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