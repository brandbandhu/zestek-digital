import { useState, type FormEvent } from "react";
import { toast } from "@/hooks/use-toast";
import { formDataToFields, isGoogleSheetsConfigured, submitLeadToGoogleSheets, type LeadFieldMap } from "@/lib/googleSheets";

type UseLeadFormSubmissionOptions = {
  formId: string;
  formName: string;
  successMessage: string;
  errorMessage?: string;
  resetOnSuccess?: boolean;
  mapFields?: (fields: Record<string, string>) => LeadFieldMap;
  mapContext?: (fields: Record<string, string>) => LeadFieldMap;
};

export const useLeadFormSubmission = ({
  formId,
  formName,
  successMessage,
  errorMessage,
  resetOnSuccess = true,
  mapFields,
  mapContext,
}: UseLeadFormSubmissionOptions) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const rawFields = formDataToFields(new FormData(form));

    try {
      setIsSubmitting(true);

      await submitLeadToGoogleSheets({
        formId,
        formName,
        pagePath: typeof window !== "undefined" ? window.location.pathname : "",
        fields: mapFields ? mapFields(rawFields) : rawFields,
        context: mapContext ? mapContext(rawFields) : {},
      });

      toast({
        title: "Request submitted",
        description: successMessage,
      });

      if (resetOnSuccess) {
        form.reset();
      }
    } catch (error) {
      console.error(`Unable to submit ${formId}`, error);

      toast({
        variant: "destructive",
        title: "Submission failed",
        description: isGoogleSheetsConfigured
          ? errorMessage || "We could not submit your request right now. Please try again."
          : "Google Sheets is not connected yet. Add the Apps Script web app URL to enable form syncing.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    handleSubmit,
  };
};
