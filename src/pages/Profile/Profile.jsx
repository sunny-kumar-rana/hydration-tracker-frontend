import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import {
    getProfile,
    updateProfile,
    changePassword,
} from "../../api/profileApi";

function Profile() {

    const [profile, setProfile] = useState({
        email: "",
        dailyGoal: "",
        timezone: ""
    });

    const [password, setPassword] = useState({
        oldPassword: "",
        newPassword: ""
    });

    async function loadProfile() {

        const res = await getProfile();

        setProfile(res.data);

    }

    useEffect(() => {

        loadProfile();

    }, []);

    async function saveProfile(e) {

        e.preventDefault();

        await updateProfile({
            email: profile.email,
            dailyGoal: Number(profile.dailyGoal),
            timezone: profile.timezone
        });

        alert("Profile Updated");

    }

    async function savePassword(e) {

        e.preventDefault();

        await changePassword(password);

        alert("Password Changed");

        setPassword({
            oldPassword: "",
            newPassword: ""
        });

    }

    return (

        <DashboardLayout>

            <h1 className="text-4xl font-bold mb-8">

                Profile

            </h1>

            <form
                onSubmit={saveProfile}
                className="bg-white p-6 rounded shadow mb-8"
            >

                <input
                    className="border p-3 rounded w-full mb-4"
                    value={profile.email || ""}
                    onChange={(e) =>
                        setProfile({
                            ...profile,
                            email: e.target.value
                        })
                    }
                    placeholder="Email"
                />

                <input
                    className="border p-3 rounded w-full mb-4"
                    type="number"
                    value={profile.dailyGoal || ""}
                    onChange={(e) =>
                        setProfile({
                            ...profile,
                            dailyGoal: e.target.value
                        })
                    }
                    placeholder="Daily Goal"
                />

                <input
                    className="border p-3 rounded w-full mb-4"
                    value={profile.timezone || ""}
                    onChange={(e) =>
                        setProfile({
                            ...profile,
                            timezone: e.target.value
                        })
                    }
                    placeholder="Timezone"
                />

                <button
                    className="bg-blue-600 text-white px-6 py-3 rounded"
                >
                    Save Profile
                </button>

            </form>

            <form
                onSubmit={savePassword}
                className="bg-white p-6 rounded shadow"
            >

                <input
                    className="border p-3 rounded w-full mb-4"
                    type="password"
                    placeholder="Old Password"
                    value={password.oldPassword}
                    onChange={(e) =>
                        setPassword({
                            ...password,
                            oldPassword: e.target.value
                        })
                    }
                />

                <input
                    className="border p-3 rounded w-full mb-4"
                    type="password"
                    placeholder="New Password"
                    value={password.newPassword}
                    onChange={(e) =>
                        setPassword({
                            ...password,
                            newPassword: e.target.value
                        })
                    }
                />

                <button
                    className="bg-green-600 text-white px-6 py-3 rounded"
                >
                    Change Password
                </button>

            </form>

        </DashboardLayout>

    );

}

export default Profile;