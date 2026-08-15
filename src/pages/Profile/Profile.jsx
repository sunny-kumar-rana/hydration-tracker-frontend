import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import {
    getProfile,
    updateProfile,
    changePassword,
    testEmail,
    testTelegram
} from "../../api/profileApi";
import toast from "react-hot-toast";

function Profile() {

    const [profile, setProfile] = useState({
        email: "",
        dailyGoal: "",
        timezone: "",
        emailNotificationEnabled: false,
        telegramNotificationEnabled: false,
        telegramChatId: ""
    });

    const [testingEmail, setTestingEmail] = useState(false);

    const [testingTelegram, setTestingTelegram] = useState(false);

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
                res.data.emailNotificationEnabled ?? false,

            telegramNotificationEnabled:
                res.data.telegramNotificationEnabled ?? false,

            telegramChatId:
                res.data.telegramChatId || ""
        });

    }

    useEffect(() => {

        loadProfile();

    }, []);

    async function saveProfileData() {

        await updateProfile({
            email: profile.email,
            dailyGoal: Number(profile.dailyGoal),
            timezone: profile.timezone,
            emailNotificationEnabled: profile.emailNotificationEnabled,
            telegramNotificationEnabled: profile.telegramNotificationEnabled,
            telegramChatId: profile.telegramChatId
        });

    }

    async function saveProfile(e) {

        e.preventDefault();

        await saveProfileData();

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

    async function handleTestEmail() {

        try {

            setTestingEmail(true);

            await saveProfileData();

            await testEmail();

            toast.success("Test request sent. Check your inbox.");

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Unable to send test email."
            );

        } finally {

            setTestingEmail(false);

        }

    }

    async function handleTestTelegram() {

        try {

            setTestingTelegram(true);

            await saveProfileData();

            await testTelegram();

            toast.success("Test request sent. Check Telegram.");

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Unable to send test notification."
            );

        } finally {

            setTestingTelegram(false);

        }

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


                <div className="flex items-center justify-between mb-6">

                    <div className="flex items-center gap-3">

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
                            className="h-5 w-5"
                        />

                        <label htmlFor="emailNotificationEnabled">
                            Enable Email Notifications
                        </label>

                    </div>

                    <button
                        type="button"
                        onClick={handleTestEmail}
                        disabled={!profile.emailNotificationEnabled}
                        className="px-4 py-2 rounded bg-blue-600 text-white disabled:bg-gray-400"
                    >
                        {
                            testingEmail
                                ? "Sending..."
                                : "Test Email"
                        }
                    </button>

                </div>

                <div className="flex items-center justify-between mb-4">

                    <div className="flex items-center gap-3">

                        <input
                            id="telegramNotificationEnabled"
                            type="checkbox"
                            checked={profile.telegramNotificationEnabled}
                            onChange={(e) =>
                                setProfile({
                                    ...profile,
                                    telegramNotificationEnabled: e.target.checked
                                })
                            }
                            className="h-5 w-5"
                        />

                        <label htmlFor="telegramNotificationEnabled">
                            Enable Telegram Notifications
                        </label>

                    </div>

                    <button
                        type="button"
                        onClick={handleTestTelegram}
                        disabled={
                            !profile.telegramNotificationEnabled ||
                            !profile.telegramChatId
                        }
                        className="px-4 py-2 rounded bg-sky-600 text-white disabled:bg-gray-400"
                    >
                        {
                            testingTelegram
                                ? "Sending..."
                                : "Test Telegram"
                        }
                    </button>

                </div>

                <label className="block mb-2 font-medium">
                    Telegram Chat ID
                </label>

                <input
                    className="border p-3 rounded w-full mb-6"
                    placeholder="Enter your Telegram Chat ID"
                    value={profile.telegramChatId || ""}
                    onChange={(e) =>
                        setProfile({
                            ...profile,
                            telegramChatId: e.target.value
                        })
                    }
                />

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