import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import {
    getProfile,
    updateProfile,
    changePassword,
} from "../../api/profileApi";
import toast from "react-hot-toast";

function Profile() {

    const [profile, setProfile] = useState({
        email: "",
        dailyGoal: "",
        timezone: "",
        emailNotificationEnabled: false
    });

    const [password, setPassword] = useState({
        oldPassword: "",
        newPassword: ""
    });

    async function loadProfile() {

        const res = await getProfile();

        setProfile({
            email: res.data.email || "",
            dailyGoal: res.data.dailyGoal || "",
            timezone: res.data.timezone || "",
            emailNotificationEnabled:
                res.data.emailNotificationEnabled ?? false
        });

    }

    useEffect(() => {

        loadProfile();

    }, []);

    async function saveProfile(e) {

        e.preventDefault();

        await updateProfile({
            email: profile.email,
            dailyGoal: Number(profile.dailyGoal),
            timezone: profile.timezone,
            emailNotificationEnabled: profile.emailNotificationEnabled
        });

        toast.success("Profile updated successfully");

    }

    async function savePassword(e) {

        e.preventDefault();

        await changePassword(password);

        toast.success("Password changed");

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
                    value={profile.email}
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
                    value={profile.dailyGoal}
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
                    value={profile.timezone}
                    onChange={(e) =>
                        setProfile({
                            ...profile,
                            timezone: e.target.value
                        })
                    }
                    placeholder="Timezone"
                />

                <div className="flex items-center gap-3 mb-6">

                    <input
                        id="emailNotificationEnabled"
                        type="checkbox"
                        checked={profile.emailNotificationEnabled}
                        onChange={(e) =>
                            setProfile({
                                ...profile,
                                emailNotificationEnabled: e.target.checked
                            })
                        }
                        className="h-5 w-5 cursor-pointer"
                    />

                    <label
                        htmlFor="emailNotificationEnabled"
                        className="text-gray-700 cursor-pointer"
                    >
                        Enable Email Notifications
                    </label>

                </div>

                <button
                    className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
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
                    className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
                >
                    Change Password
                </button>

            </form>

        </DashboardLayout>

    );

}

export default Profile;