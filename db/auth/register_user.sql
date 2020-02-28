INSERT INTO usersSoecs (
    user_email,
    user_password
)VALUES(
    ${email},
    ${hash}
)
RETURNING user_id,user_email