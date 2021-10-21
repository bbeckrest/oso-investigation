allow(user: User, "view_all_users", _) if
    user.isAdmin = true;