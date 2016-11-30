exports.validate_user_register = function (data, call_ok, call_bad) {
    if (!data) {
        call_bad("formato invalido");
        return;
    }
    //otras validaciones

    call_ok();
};