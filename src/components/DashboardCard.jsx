function DashboardCard({
    title,
    value,
    unit = "",
    icon,
    color = "bg-blue-500"
}) {

    return (

        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">

            <div className="flex justify-between items-start">

                <div>

                    <p className="text-gray-500 text-sm">

                        {title}

                    </p>

                    <h2 className="text-3xl font-bold mt-3">

                        {value}

                        {unit && (

                            <span className="text-lg ml-1">

                                {unit}

                            </span>

                        )}

                    </h2>

                </div>

                <div className={`${color} text-white p-4 rounded-xl text-2xl`}>

                    {icon}

                </div>

            </div>

        </div>

    );

}

export default DashboardCard;