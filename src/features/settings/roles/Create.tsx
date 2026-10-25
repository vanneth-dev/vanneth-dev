import { useState } from "react";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { UserFormData, User } from "src/features/settings/users/types/user";
import { useNavigate } from "react-router-dom";
import CreateUserForm from "./forms/CreateUserForm";
import { Router } from "src/router/routes";
const Create = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<UserFormData | null>(null);
  const [response, setResponse] = useState<User | null>(null);
  const Navigate = useNavigate();

  const handleSubmit = (data: UserFormData) => {
    setSubmittedData(data);
    setResponse(null);
    setIsSubmitted(true);
  };

  const handleBack = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setResponse(null);
    Navigate(Router.SETTINGS.USERS.INDEX);
  };

  const handleCancel = () => {
    Navigate(Router.SETTINGS.USERS.INDEX);
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {isSubmitted ? "User Created Successfully" : "Create New User"}
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              {isSubmitted
                ? "The user has been created and can now access the system"
                : "Enter user details to create a new user account"}
            </p>
          </div>
          {isSubmitted && (
            <button
              onClick={handleBack}
              className="flex items-center text-blue-600 hover:text-blue-900 transition-colors"
            >
              <ArrowLeft size={16} className="mr-1" />
              Back to User List
            </button>
          )}
        </div>
      </div>

      <div className="px-4 py-5 sm:p-6">
        {isSubmitted ? (
          <div className="flex flex-col items-center py-6 animate-fade-in">
            <div className="rounded-full bg-green-100 p-3 mb-4">
              <CheckCircle size={48} className="text-green-500" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-4">
              User Created Successfully
            </h3>

            {submittedData && response && (
              <div className="bg-gray-50 p-4 rounded-md w-full max-w-2xl border border-gray-200">
                <h4 className="text-sm font-medium text-gray-500 mb-2">
                  User Information
                </h4>
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Name (English)
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {response.name}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Name (Khmer)
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {response.nameKm}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Username
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {response.username}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {response.email}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Locale
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {response.locale.toUpperCase()}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Locale
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {response.roles.length > 0
                        ? response.roles.map((role) => role.name).join(", ")
                        : "No roles assigned"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Status
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          response.active === "Y"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {response.active === "Y" ? "Active" : "Inactive"}
                      </span>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Order</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {response.order || 0}
                    </dd>
                  </div>
                </dl>
              </div>
            )}

            <div className="mt-6 flex space-x-3">
              <button
                onClick={handleBack}
                className="px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Edit User
              </button>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setSubmittedData(null);
                }}
                className="px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Create Another User
              </button>
            </div>
          </div>
        ) : (
          <CreateUserForm
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            responseData={setResponse}
          />
        )}
      </div>
    </div>
  );
};

export default Create;
