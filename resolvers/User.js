const { profiles } = require("../data/db");

module.exports = {
    salary(user) {
        return user.real_salary
    },
    profile(user) {
        const selected = profiles.filter((e) => e.id === user.profile_id);
        return (selected) ? selected[0] : null;
    }
}